import { useEffect, useState } from 'react';
import { getTableByBranchIdApi } from '@/api/getTableByBranchId';

export function useSelectShopAndBranchData(shops, shopId, branchId) {
  const [shopImg, setShopImg] = useState(null);
  const [currentBranch, setCurrentBranch] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        setIsLoading(true);
        
        if (!shops) {
          setError("no Shops");
          setIsLoading(false);
          return;
        }

        const selectedShop = shops.find(shop => shop.id === Number(shopId));

        if (!selectedShop) {
          setError("Shop not found");
          setIsLoading(false);
          return;
        }

        // Get branch info from shops data for basic info
        const selectedBranch = selectedShop?.brunchs?.find(branch => branch.id === Number(branchId));

        if (!selectedBranch) {
          setError("Branch not found");
          setIsLoading(false);
          return;
        }

        // Fetch menu/table data from the API
        const menuData = await getTableByBranchIdApi(branchId);
        
        // Merge shop image with menu data
        const mergedBranchData = {
          ...selectedBranch,
          ...menuData,
          cat_meal: menuData.cat_meal || menuData.categories || []
        };

        setError(null);
        localStorage.setItem("selectedShopID", selectedShop.id.toString());
        localStorage.setItem("selectedBranchID", selectedBranch.id.toString());

        setShopImg(selectedShop.img);
        setCurrentBranch(mergedBranchData);
      } catch (err) {
        setError("Failed to fetch branch data: " + (err.message || "Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    if (shopId && branchId && shops) {
      fetchBranchData();
    }
  }, [shops, shopId, branchId]);

  return { shopImg, currentBranch, error, isLoading };
}

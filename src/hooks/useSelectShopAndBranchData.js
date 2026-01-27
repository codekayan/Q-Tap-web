import { useEffect, useState } from 'react';

export function useSelectShopAndBranchData(shops, shopId, branchId) {
  const [shopImg, setShopImg] = useState(null);
  const [currentBranch, setCurrentBranch] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        setIsLoading(true);
        
        if (!shops || shops.length === 0) {
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

        // Get branch info from shops data
        const selectedBranch = selectedShop?.brunchs?.find(branch => branch.id === Number(branchId));

        if (!selectedBranch) {
          setError("Branch not found");
          setIsLoading(false);
          return;
        }

        // Use the branch data directly - it should contain cat_meal or categories
        const branchData = {
          ...selectedBranch,
          cat_meal: selectedBranch.cat_meal || selectedBranch.categories || []
        };

        setError(null);
        localStorage.setItem("selectedShopID", selectedShop.id.toString());
        localStorage.setItem("selectedBranchID", selectedBranch.id.toString());

        setShopImg(selectedShop.img);
        setCurrentBranch(branchData);
      } catch (err) {
        setError("Failed to fetch branch data: " + (err.message || "Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    if (shopId && branchId && shops && shops.length > 0) {
      fetchBranchData();
    }
  }, [shops, shopId, branchId]);

  return { shopImg, currentBranch, error, isLoading };
}

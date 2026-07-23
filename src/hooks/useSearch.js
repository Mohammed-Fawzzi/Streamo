import { useState, useMemo, useCallback } from "react";

export function useSearch(data = [], searchKey) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredData = useMemo(() => {
    if (!data?.length) return [];

    const term = searchTerm.toLowerCase().trim();
    if (!term) return data;

    return data.filter((item) =>
      String(item[searchKey] || "")
        .toLowerCase()
        .includes(term)
    );
  }, [data, searchTerm, searchKey]);

  return { searchTerm, handleSearch, filteredData };
}

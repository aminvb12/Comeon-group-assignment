import { useRef, useState, useEffect, useDeferredValue } from "react";

import {
  getListOfCategoriesApiService,
  getListOfGamesApiService,
} from "../service/game";

let gamesClone = [];

export default function useGameHook() {
  const hasFetched = useRef(false);
  const [games, setGames] = useState([]);

  const defferredGames = useDeferredValue(games);

  const [categories, setCategories] = useState([]);

  const doGetListofGames = async () => {
    try {
      const games = await getListOfGamesApiService();
      gamesClone = [...games];

      setGames(games);
    } catch (error) {}
  };

  const doGetListOfCategories = async () => {
    try {
      const categories = await getListOfCategoriesApiService();
      setCategories(categories);
    } catch (error) {}
  };

  useEffect(() => {
    if (hasFetched.current) return; // Prevent second fetch
    hasFetched.current = true;
    doGetListofGames();
    doGetListOfCategories();
  }, []);

  const doFilterByCategory = (categoryId) => {
    setGames(
      gamesClone.filter((game) => game.categoryIds.includes(Number(categoryId)))
    );
  };

  const doSearchGameByName = (searchText) => {
    setGames(
      gamesClone.filter((game) =>
        game.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return {
    games: defferredGames,
    categories,
    doFilterByCategory,
    doSearchGameByName,
  };
}

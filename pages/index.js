import React from "react";
import Head from "next/head";
import { useState } from "react";

export default function Home({ pokemonList}) {
    const [search, setSearch] = useState("");

    // 検索文字列に部分一致するポケモンのみをフィルタリング
    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>初代151ポケモン一覧</title>
                <meta name="description" content= "初代151ポケモン一覧" />
            </Head>
            <div className="container mx-auto p-4">
                {/* 検索バー */}
                <input
                    type="text"
                    placeholder="ポケモン検索..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 mb-4 border border-blue-300 rounded-md focus:outline-none focus:border-blue-700 bg-blue-50"
                />
                {/* ポケモン一覧 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredPokemon.map((pokemon, idx) => (
                        <div 
                            key={idx}
                            className="p-4 rounded-md shadow-md bg-gradient-to-br from-gray-200 to-gray-400"
                        >
                            <h2 className="trxt-lg font-semibold" capitalize>{pokemon.name}</h2>
                        </div>
                    ))}
                </div>
                
            </div>

        </div>
    );
}

// Next.jsのビルド時にPokéAPIから初代151匹分のデータを取得
export async function getStaticProps() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await res.json();
    return {
        props: {
            pokemonList: data.results,
        },
        revalidate: 60, // 60秒ごとに再生成
    };
}

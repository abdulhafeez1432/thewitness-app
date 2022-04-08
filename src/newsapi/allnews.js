import { identity } from "svelte/internal";
import { writable } from "svelte/store";
const path = "http://127.0.0.1:8000/"
export const news = writable([]);
const fetchAllnews = async () =>{

    //const url = 'http://api.allnigerianewspapers.com.ng/api/news/?page=2';
    //const url = 'http://127.0.0.1:8000/api/posts'
    const url = 'path + {api/breakingnews}';
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.results)
    const loadedNews = data.results.map((data, index) =>{
        return {
            title: data.title,
            content: data.content
        };
    });
    news.set(loadedNews);
};
fetchAllnews();

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

  // let initialData = [];
  // const setData = (data) => {
  //   initialData = data;
  // };

  // async function fetchTop10Books() {
  //   try {
  //     const response = await fetch("/top10Data.json");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     const top10Books = {};

  //     data.forEach((book) => {
  //       top10Books[book.id] = {
  //         title: book.title,
  //         rating: book.rating,
  //         link: book.link,
  //       };
  //     });

  //     return top10Books;
  //   } catch (error) {
  //     console.error("Error fetching top 10 books:", error);
  //     return null;
  //   }
  // }

  // const DisplayData = (data) => {
  //   const top10Element = document.getElementById("top10");

  //   let str = "";
  //   const dataArray = Object.values(data);
    
  //   str = `<p class=" h2">
  //         <em class="bi bi-book"></em>
  //             Top 10 Popular Books
  //           </p>
  //           <hr>`;

  //   str += `<div class="row row-cols-3 g-4">`;
  //   console.log(dataArray);
  //   dataArray.forEach((d) => {
  //     str += `
  //     <div class="col">
  //   <div class="card card-color">
  //   <div class="head-wrapper">
  //     <h4 class="p-3">${d.title}</h4>
  //   </div>
  //     <hr>
  //     <div class="image-wrapper">
  //       <img src="${d.link}" class="mx-auto" alt="${d.title}" width="200px">
  //     </div>
  //     <hr>
  //       <p class="lead fw-semibold text-left px-4 yellow-star">
  //       <span class=" text-dark">${d.rating}</span> <em class="bi bi-star-fill"></em>
  //     </p>
  //   </div>
  // </div>`;
  //   });
  //   str += `</div>`;

  //   top10Element.innerHTML = str;
  // };

  // fetchTop10Books().then((top10Books) => {
  //   console.log(top10Books);
  //   console.log(typeof top10Books);
  //   DisplayData(top10Books);
  // });

  // export const onItemClick = () => {
  //   let book_title = document.getElementById('book_title').values
  //   console.log(book_title);

  // }

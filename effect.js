document.addEventListener("DOMContentLoaded", function () {
    const lessonTitles = document.querySelectorAll(".title-lesson");

    lessonTitles.forEach((title) => {
        title.addEventListener("click", function () {
            const lessonItems = title.nextElementSibling;

            if (lessonItems.style.display === "none" || !lessonItems.style.display) {
                // Mở lesson-items
                lessonItems.style.display = "block";
                title.querySelector("i").classList.remove("fa-chevron-down");
                title.querySelector("i").classList.add("fa-chevron-up");
            } else {
                // Đóng lesson-items
                lessonItems.style.display = "none";
                title.querySelector("i").classList.remove("fa-chevron-up");
                title.querySelector("i").classList.add("fa-chevron-down");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("#rate-star > li");
    listItems.forEach((item, index) => {
      
      const stars = item.querySelectorAll(".fa-star");
      const starCount = 5 - index; 

      stars.forEach((star, i) => {
        if (i < starCount) {
          star.style.color = "gold"; 
        } else {
          star.style.color = "#555"; 
        }
      });
    });
  });
  
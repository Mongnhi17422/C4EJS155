
// Show/Hidden lesson list

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

// Css star rate
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
  
// Find course
  function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let courses = document.getElementsByClassName("the-courses");

    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];
        let courseName = course.querySelector("h4").innerText.toLowerCase();  // Lấy tên khóa học
        
        if (courseName.indexOf(input) > -1) {
            course.style.display = "";  
        } else {
            course.style.display = "none";  
        }
    }
}

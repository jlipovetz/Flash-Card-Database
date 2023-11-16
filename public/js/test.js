document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.matches(".flip")) {
    const testId = e.target.getAttribute("data-id");

    document.location.href = `/test/${testId}/0`;
  }
});

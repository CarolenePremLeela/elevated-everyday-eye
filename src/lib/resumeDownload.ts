// Google Drive resume link
const RESUME_URL = "https://drive.google.com/file/d/1hImACpo0wVS9iajzrQ6d0XGU4AjarDG2/view?usp=drive_link";

// Download resume by opening Google Drive link
export const downloadResume = async () => {
  window.open(RESUME_URL, "_blank");
};

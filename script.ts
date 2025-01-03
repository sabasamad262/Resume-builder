const menuPage = document.querySelector(".big-menu-container") as HTMLDivElement;
const formPage = document.querySelector(".big-container") as HTMLDivElement;
const resumePage = document.querySelector(".dynamic-resume-container") as HTMLDivElement;

menuPage.style.display = "flex";
formPage.style.display = "none";
resumePage.style.display = "none";

function seeResumebuttonHandler() {
  menuPage.style.display = "none";
  resumePage.style.display = "block";
  formPage.style.display = "none";
}

function createResumebuttonHandler() {
  menuPage.style.display = "none";
  formPage.style.display = "flex";
  resumePage.style.display = "none";
}

////////////////////////////////////////////////////////////

const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;

const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeTitle = document.getElementById("resumeTitle") as HTMLHeadingElement;
const resumeAbout = document.getElementById("resumeAbout") as HTMLParagraphElement;

const resumePhone = document.getElementById("resumePhone") as HTMLSpanElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLSpanElement;
const resumeLocation = document.getElementById("resumeLocation") as HTMLSpanElement;

const resumeDesignation = document.getElementById("resumeDesignation") as HTMLSpanElement;
const resumeCompanyName = document.getElementById("resumeCompanyName") as HTMLSpanElement;
const resumeCompanyLocation = document.getElementById("resumeCompanyLocation") as HTMLSpanElement;
const resumeCompanyJobTime = document.getElementById("resumeCompanyJobTime") as HTMLSpanElement;
const resumeJobDescription = document.getElementById("resumeJobDescription") as HTMLParagraphElement;

const resumeDegree = document.getElementById("resumeDegree") as HTMLHeadingElement;
const resumeIntituteName = document.getElementById("resumeIntituteName") as HTMLSpanElement;
const resumeField = document.getElementById("resumeField") as HTMLSpanElement;
const resumeTimePeriod = document.getElementById("resumeTimePeriod") as HTMLSpanElement;

const resumeSkills = document.getElementById("resumeSkills") as HTMLLIElement;
const resumeLanguage = document.getElementById("resumeLanguage") as HTMLLIElement;

const editResumeBtn = document.getElementById('editResumeBtn') as HTMLButtonElement;
const downloadPdfBtn = document.getElementById('downloadPdfBtn') as HTMLButtonElement;

////////////////////////////////////////////////////////////

const form = document.getElementById("resume-form") as HTMLFormElement;

form.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const naam = (document.getElementById("name") as HTMLInputElement).value;
  const userName = (document.getElementById("username") as HTMLInputElement)
    .value;
  const profilePicture = document.getElementById("photo") as HTMLInputElement;

  const userlocation = (document.getElementById("location") as HTMLInputElement)
    .value;
  const userEmail = (document.getElementById("email") as HTMLInputElement)
    .value;
  const userPhone = (document.getElementById("phone") as HTMLInputElement)
    .value;

  const Profile = (document.getElementById("profile") as HTMLInputElement)
    .value;
  const title = (document.getElementById("title") as HTMLInputElement).value;

  const companyName = (
    document.getElementById("companyName") as HTMLInputElement
  ).value;
  const companyLocation = (
    document.getElementById("companyLocation") as HTMLInputElement
  ).value;
  const desgination = (
    document.getElementById("desgination") as HTMLInputElement
  ).value;
  const JobTime = (document.getElementById("JobTime") as HTMLInputElement)
    .value;
  const jobDescription = (
    document.getElementById("jobDescription") as HTMLInputElement
  ).value;

  const instituteName = (
    document.getElementById("instituteName") as HTMLInputElement
  ).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const field = (document.getElementById("field") as HTMLInputElement).value;
  const passedYear = (
    document.getElementById("passed-year") as HTMLInputElement
  ).value;

  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;

  const languages = (document.getElementById("languages") as HTMLInputElement)
    .value;

  ////////////////////////////////////////////////////////////
  
  const photoFile = profilePicture.files ? profilePicture.files[0] : null;

  let photoCheck = "";

  if (photoFile) {
    photoCheck = await fileToBase64(photoFile);
    localStorage.setItem("resumePhoto", photoCheck);
    resumePhoto.src = photoCheck;
  }

  formPage.style.display = "none";
  resumePage.style.display = "block";

  resumeName.textContent = naam;
  resumeTitle.textContent = title;
  resumeAbout.textContent = Profile;

  resumePhone.textContent = userPhone;
  resumeEmail.textContent = userEmail;
  resumeLocation.textContent = userlocation;

  resumeDesignation.textContent = desgination;
  resumeCompanyName.textContent = companyName;
  resumeCompanyLocation.textContent = companyLocation;
  resumeCompanyJobTime.textContent = JobTime;
  resumeJobDescription.textContent = jobDescription;

  resumeDegree.textContent = degree;
  resumeIntituteName.textContent = instituteName;
  resumeField.textContent = field;
  resumeTimePeriod.textContent = passedYear;

  resumeSkills.textContent = skills;
  resumeLanguage.textContent = languages;
});

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();

    filereader.onloadend = () => {
      resolve(filereader.result as string);
    };

    filereader.onerror = reject;
    filereader.readAsDataURL(file);
  });
}

////////////////////////////////////////////////////////////

editResumeBtn.addEventListener('click', () => {
  updateForm();

  resumePage.style.display = "none";
  formPage.style.display = "flex";
  menuPage.style.display = "none";

})
function updateForm() {

  (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';

  let resumeUserName = (document.getElementById("username") as HTMLInputElement).value;
  (document.getElementById("username") as HTMLInputElement).value = resumeUserName;

  (document.getElementById("location") as HTMLInputElement).value = resumeLocation.textContent || '';
  (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent || '';
  (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent || '';

  (document.getElementById("profile") as HTMLInputElement).value = resumeAbout.textContent || '';
  (document.getElementById("title") as HTMLInputElement).value = resumeTitle.textContent || '';

  (document.getElementById("companyName") as HTMLInputElement).value = resumeCompanyName.textContent || '';
  (document.getElementById("companyLocation") as HTMLInputElement).value = resumeCompanyLocation.textContent || '';
  (document.getElementById("desgination") as HTMLInputElement).value = resumeDesignation.textContent || '';
  (document.getElementById("JobTime") as HTMLInputElement).value = resumeCompanyJobTime.textContent || '';
  (document.getElementById("jobDescription") as HTMLInputElement).value = resumeJobDescription.textContent || '';

  (document.getElementById("instituteName") as HTMLInputElement).value = resumeIntituteName.textContent || '';
  (document.getElementById("degree") as HTMLInputElement).value = resumeDegree.textContent || '';
  (document.getElementById("field") as HTMLInputElement).value = resumeField.textContent || '';
  (document.getElementById("passed-year") as HTMLInputElement).value = resumeTimePeriod.textContent || '';

  (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';

  (document.getElementById("languages") as HTMLInputElement).value = resumeLanguage.textContent || '';


}
////////////////////////////////////////////////////////////

declare const html2pdf: any;

downloadPdfBtn.addEventListener("click", () => {
  if (typeof html2pdf === "undefined") {
    alert("Error: html2pdf library is not working");
    return;
  }

  // Define the element to convert into PDF
  const content = document.querySelector(".resume-container");

  if (content instanceof HTMLElement) {
    // Apply dynamic style for PDF export
    content.style.width = '100%';
    content.style.maxWidth = '100%';
    content.style.boxSizing = 'border-box';
  }

  // Define PDF settings
  const downloadedPDFSettings = {
    // margin: 0.5,
    filename: "Your Resume.pdf",
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // Generate and download PDF
  html2pdf().set(downloadedPDFSettings).from(content).save().catch((error: Error) => {
    console.error("PDF compilation error", error);

  });
});



////////////////////////////////////////////////////////////

const experienceFieldset = document.getElementById("experience-item") as HTMLDivElement;
const addExperienceButton = document.getElementById("add-experience") as HTMLButtonElement;
const removeExperienceButton = document.getElementById("remove-experience") as HTMLButtonElement;

const educationFieldset = document.getElementById("education-item") as HTMLDivElement;
const addEducationButton = document.getElementById("add-education") as HTMLButtonElement;
const removeEducationButton = document.getElementById("remove-education") as HTMLButtonElement;

addExperienceButton?.addEventListener("click", () => {
  const newExperience = document.createElement("div");
  newExperience.classList.add("experience-item");

  newExperience.innerHTML = `
  <h5>New Experiance Section</h5>
  <label for="companyName">Company name:</label>
  <input type="text" id="companyName" placeholder="ABC Tech Solutions" required>
  
  <label for="companyLocation">Company location:</label>
  <input type="text" id="companyLocation" placeholder="Gulshan maymar Karachi, Pakistan" required>
  
  <label for="desgination">Designation:</label>
  <input type="text" id="desgination" placeholder="Front-End Developer Intern" required>
  
  <label for="jobTime">Time period:</label>
  <input type="text" id="JobTime" placeholder="2022-2024" required>
  
  <label for="jobDescription">Description:</label>
  <input type="text" id="jobDescription" placeholder="Some thing about your job (optional)">
  
  
  `;

  experienceFieldset.appendChild(newExperience);
});

addEducationButton?.addEventListener("click", () => {
  const newEducation = document.createElement("div");
  newEducation.classList.add("education-item");

  newEducation.innerHTML = `
                        <h5>New Education Section</h5>
                        <label for="instituteName">Institute name:</label>
                        <input type="text" id="instituteName" placeholder="Govt. National College Karachi"required>

                        <label for="degree">Degree name:</label>
                        <input type="text" id="degree" placeholder="Intermediate" required>
                        
                        <label for="field">Which field:</label>
                        <input type="text" id="field" placeholder="Pre-Engineering">
                        
                        <label for="passed-year">Year passed:</label>
                        <input type="text" id="passed-year" placeholder="2023-Present" required>
                        `;

  educationFieldset.appendChild(newEducation);
});

removeExperienceButton?.addEventListener("click", () => {
  const lastExperience = experienceFieldset.querySelector(".experience-item:last-child");

  if (lastExperience) {
    experienceFieldset.removeChild(lastExperience);
  }
});

removeEducationButton?.addEventListener("click", () => {
  const lastEducation = educationFieldset.querySelector(".education-item:last-child");

  if (lastEducation) {
    educationFieldset.removeChild(lastEducation);
  }
});

////////////////////////////////////////////////////////////

// // function to save form data
function saveFormData() {
  const formData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    userName: (document.getElementById("username") as HTMLInputElement).value,

    location: (document.getElementById("location") as HTMLInputElement).value,
    Email: (document.getElementById("email") as HTMLInputElement).value,
    Phone: (document.getElementById("phone") as HTMLInputElement).value,

    Profile: (document.getElementById("profile") as HTMLInputElement).value,
    Title: (document.getElementById("title") as HTMLInputElement).value,
    Companyname: (document.getElementById("companyName") as HTMLInputElement).value,
    Companylocation: (document.getElementById("companyLocation") as HTMLInputElement).value,
    designation: (document.getElementById("desgination") as HTMLInputElement).value,
    jobtime: (document.getElementById("JobTime") as HTMLInputElement).value,
    jobdescription: (document.getElementById("jobDescription") as HTMLInputElement).value,

    institutename: (document.getElementById("instituteName") as HTMLInputElement).value,
    degree: (document.getElementById("degree") as HTMLInputElement).value,
    field: (document.getElementById("field") as HTMLInputElement).value,
    passedyear: (document.getElementById("passed-year") as HTMLInputElement).value,
    skills: (document.getElementById("skills") as HTMLTextAreaElement).value,

    languages: (document.getElementById("languages") as HTMLInputElement).value,

  };
  localStorage.setItem('savedFormData', JSON.stringify(formData));
}

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem('savedFormData') || '{}');
  
  const defaultData = {
    name: 'John Doe',
    userName: 'johndoe123',
    location: 'New York, USA',
    Email: 'johndoe@example.com',
    Phone: '+1-234-567-8901',
    Profile: 'Experienced web developer with a passion for creating interactive applications.',
    Title: 'Senior Web Developer',
    Companyname: 'Tech Solutions Inc.',
    Companylocation: 'San Francisco, CA',
    designation: 'Full-Stack Developer',
    jobtime: '2018 - Present',
    jobdescription: 'Developed and maintained web applications, optimized performance, and led team projects.',
    institutename: 'University of California, Berkeley',
    degree: 'Bachelor of Science in Computer Science',
    field: 'Computer Science',
    passedyear: '2017',
    skills: 'JavaScript, TypeScript, HTML, CSS, React, Node.js',
    languages: 'English, Spanish'
  };
  
  // Merge saved data with default data
  const formData = { ...defaultData, ...savedData };

  const userChoice = confirm("Would you like to auto-fill the form?");
  if (userChoice) {
    (document.getElementById("name") as HTMLInputElement).value = formData.name;
    (document.getElementById("username") as HTMLInputElement).value = formData.userName;
    (document.getElementById("location") as HTMLInputElement).value = formData.location;
    (document.getElementById("email") as HTMLInputElement).value = formData.Email;
    (document.getElementById("phone") as HTMLInputElement).value = formData.Phone;
    (document.getElementById("profile") as HTMLInputElement).value = formData.Profile;
    (document.getElementById("title") as HTMLInputElement).value = formData.Title;
    (document.getElementById("companyName") as HTMLInputElement).value = formData.Companyname;
    (document.getElementById("companyLocation") as HTMLInputElement).value = formData.Companylocation;
    (document.getElementById("desgination") as HTMLInputElement).value = formData.designation;
    (document.getElementById("JobTime") as HTMLInputElement).value = formData.jobtime;
    (document.getElementById("jobDescription") as HTMLInputElement).value = formData.jobdescription;
    (document.getElementById("instituteName") as HTMLInputElement).value = formData.institutename;
    (document.getElementById("degree") as HTMLInputElement).value = formData.degree;
    (document.getElementById("field") as HTMLInputElement).value = formData.field;
    (document.getElementById("passed-year") as HTMLInputElement).value = formData.passedyear;
    (document.getElementById("skills") as HTMLTextAreaElement).value = formData.skills;
    (document.getElementById("languages") as HTMLInputElement).value = formData.languages;
  }
}

document.getElementById("resume-form")?.addEventListener('submit', saveFormData);

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const menuPage = document.querySelector(".big-menu-container");
const formPage = document.querySelector(".big-container");
const resumePage = document.querySelector(".dynamic-resume-container");
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
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumeTitle = document.getElementById("resumeTitle");
const resumeAbout = document.getElementById("resumeAbout");
const resumePhone = document.getElementById("resumePhone");
const resumeEmail = document.getElementById("resumeEmail");
const resumeLocation = document.getElementById("resumeLocation");
const resumeDesignation = document.getElementById("resumeDesignation");
const resumeCompanyName = document.getElementById("resumeCompanyName");
const resumeCompanyLocation = document.getElementById("resumeCompanyLocation");
const resumeCompanyJobTime = document.getElementById("resumeCompanyJobTime");
const resumeJobDescription = document.getElementById("resumeJobDescription");
const resumeDegree = document.getElementById("resumeDegree");
const resumeIntituteName = document.getElementById("resumeIntituteName");
const resumeField = document.getElementById("resumeField");
const resumeTimePeriod = document.getElementById("resumeTimePeriod");
const resumeSkills = document.getElementById("resumeSkills");
const resumeLanguage = document.getElementById("resumeLanguage");
const editResumeBtn = document.getElementById('editResumeBtn');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
////////////////////////////////////////////////////////////
const form = document.getElementById("resume-form");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const naam = document.getElementById("name").value;
    const userName = document.getElementById("username")
        .value;
    const profilePicture = document.getElementById("photo");
    const userlocation = document.getElementById("location")
        .value;
    const userEmail = document.getElementById("email")
        .value;
    const userPhone = document.getElementById("phone")
        .value;
    const Profile = document.getElementById("profile")
        .value;
    const title = document.getElementById("title").value;
    const companyName = document.getElementById("companyName").value;
    const companyLocation = document.getElementById("companyLocation").value;
    const desgination = document.getElementById("desgination").value;
    const JobTime = document.getElementById("JobTime")
        .value;
    const jobDescription = document.getElementById("jobDescription").value;
    const instituteName = document.getElementById("instituteName").value;
    const degree = document.getElementById("degree").value;
    const field = document.getElementById("field").value;
    const passedYear = document.getElementById("passed-year").value;
    const skills = document.getElementById("skills")
        .value;
    const languages = document.getElementById("languages")
        .value;
    ////////////////////////////////////////////////////////////
    const photoFile = profilePicture.files ? profilePicture.files[0] : null;
    let photoCheck = "";
    if (photoFile) {
        photoCheck = yield fileToBase64(photoFile);
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
}));
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const filereader = new FileReader();
        filereader.onloadend = () => {
            resolve(filereader.result);
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
});
function updateForm() {
    document.getElementById("name").value = resumeName.textContent || '';
    let resumeUserName = document.getElementById("username").value;
    document.getElementById("username").value = resumeUserName;
    document.getElementById("location").value = resumeLocation.textContent || '';
    document.getElementById("email").value = resumeEmail.textContent || '';
    document.getElementById("phone").value = resumePhone.textContent || '';
    document.getElementById("profile").value = resumeAbout.textContent || '';
    document.getElementById("title").value = resumeTitle.textContent || '';
    document.getElementById("companyName").value = resumeCompanyName.textContent || '';
    document.getElementById("companyLocation").value = resumeCompanyLocation.textContent || '';
    document.getElementById("desgination").value = resumeDesignation.textContent || '';
    document.getElementById("JobTime").value = resumeCompanyJobTime.textContent || '';
    document.getElementById("jobDescription").value = resumeJobDescription.textContent || '';
    document.getElementById("instituteName").value = resumeIntituteName.textContent || '';
    document.getElementById("degree").value = resumeDegree.textContent || '';
    document.getElementById("field").value = resumeField.textContent || '';
    document.getElementById("passed-year").value = resumeTimePeriod.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
    document.getElementById("languages").value = resumeLanguage.textContent || '';
}
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
    html2pdf().set(downloadedPDFSettings).from(content).save().catch((error) => {
        console.error("PDF compilation error", error);
    });
});
////////////////////////////////////////////////////////////
const experienceFieldset = document.getElementById("experience-item");
const addExperienceButton = document.getElementById("add-experience");
const removeExperienceButton = document.getElementById("remove-experience");
const educationFieldset = document.getElementById("education-item");
const addEducationButton = document.getElementById("add-education");
const removeEducationButton = document.getElementById("remove-education");
addExperienceButton === null || addExperienceButton === void 0 ? void 0 : addExperienceButton.addEventListener("click", () => {
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
addEducationButton === null || addEducationButton === void 0 ? void 0 : addEducationButton.addEventListener("click", () => {
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
removeExperienceButton === null || removeExperienceButton === void 0 ? void 0 : removeExperienceButton.addEventListener("click", () => {
    const lastExperience = experienceFieldset.querySelector(".experience-item:last-child");
    if (lastExperience) {
        experienceFieldset.removeChild(lastExperience);
    }
});
removeEducationButton === null || removeEducationButton === void 0 ? void 0 : removeEducationButton.addEventListener("click", () => {
    const lastEducation = educationFieldset.querySelector(".education-item:last-child");
    if (lastEducation) {
        educationFieldset.removeChild(lastEducation);
    }
});
////////////////////////////////////////////////////////////
// // function to save form data
function saveFormData() {
    const formData = {
        name: document.getElementById("name").value,
        userName: document.getElementById("username").value,
        location: document.getElementById("location").value,
        Email: document.getElementById("email").value,
        Phone: document.getElementById("phone").value,
        Profile: document.getElementById("profile").value,
        Title: document.getElementById("title").value,
        Companyname: document.getElementById("companyName").value,
        Companylocation: document.getElementById("companyLocation").value,
        designation: document.getElementById("desgination").value,
        jobtime: document.getElementById("JobTime").value,
        jobdescription: document.getElementById("jobDescription").value,
        institutename: document.getElementById("instituteName").value,
        degree: document.getElementById("degree").value,
        field: document.getElementById("field").value,
        passedyear: document.getElementById("passed-year").value,
        skills: document.getElementById("skills").value,
        languages: document.getElementById("languages").value,
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
    const formData = Object.assign(Object.assign({}, defaultData), savedData);
    const userChoice = confirm("Would you like to auto-fill the form?");
    if (userChoice) {
        document.getElementById("name").value = formData.name;
        document.getElementById("username").value = formData.userName;
        document.getElementById("location").value = formData.location;
        document.getElementById("email").value = formData.Email;
        document.getElementById("phone").value = formData.Phone;
        document.getElementById("profile").value = formData.Profile;
        document.getElementById("title").value = formData.Title;
        document.getElementById("companyName").value = formData.Companyname;
        document.getElementById("companyLocation").value = formData.Companylocation;
        document.getElementById("desgination").value = formData.designation;
        document.getElementById("JobTime").value = formData.jobtime;
        document.getElementById("jobDescription").value = formData.jobdescription;
        document.getElementById("instituteName").value = formData.institutename;
        document.getElementById("degree").value = formData.degree;
        document.getElementById("field").value = formData.field;
        document.getElementById("passed-year").value = formData.passedyear;
        document.getElementById("skills").value = formData.skills;
        document.getElementById("languages").value = formData.languages;
    }
}
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', saveFormData);

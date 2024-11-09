

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('resumeProfileImage').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function generateResume() {
    // Check if all required fields are filled
    const requiredFields = [
        'name', 'title', 'profile', 'email', 'phone', 'location',
        'school', 'degree', 'eduDate', 'experience', 'skills', 'languages',
        'github', 'linkedin'
    ];

    let allFieldsFilled = true;
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        alert('Please fill in all the fields.');
        return;
    }

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const profile = document.getElementById('profile').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const eduDate = document.getElementById('eduDate').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const languages = document.getElementById('languages').value.split(',').map(lang => lang.trim());
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;

    document.getElementById('previewName').innerText = name;
    document.getElementById('previewTitle').innerText = title;
    document.getElementById('previewProfile').innerText = profile;
    document.getElementById('previewContact').innerHTML = `<b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Location:</b> ${location}`;
    
    document.getElementById('previewEducation').innerHTML = `<b>School:</b> ${school}<br><b>Degree:</b> ${degree}<br><b>EduDate:</b> ${eduDate}`;
    //document.getElementById('previewEducation').innerHTML = `<b>${school}</b> - ${degree} (${eduDate})`;
    document.getElementById('previewExperience').innerText = experience;
    document.getElementById('previewSkills').innerHTML = skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
    document.getElementById('previewLanguages').innerHTML = languages.map(lang => `<span class="language-tag">${lang}</span>`).join('');
    document.getElementById('previewGithub').href = github;
    document.getElementById('previewLinkedin').href = linkedin;

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('resume').style.display = 'block';
}

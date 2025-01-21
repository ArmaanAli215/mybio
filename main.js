document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Loading site config:', siteConfig); // Debug line

        // Basic info
        document.title = siteConfig.siteName;
        document.getElementById('name').textContent = siteConfig.name;
        document.getElementById('shortBio').textContent = siteConfig.shortBio;
        
        // Profile picture
        const profilePic = document.getElementById('profilePic');
        if (profilePic) {
            profilePic.src = siteConfig.profilePic;
            profilePic.alt = siteConfig.name;
        }
        
        // Skills
        const skillsContainer = document.getElementById('skills');
        if (skillsContainer && siteConfig.skills) {
            skillsContainer.innerHTML = siteConfig.skills
                .map(skill => `<span class="tag">${skill}</span>`)
                .join('');
        }
        
        // Social Links
        const socialLinksContainer = document.getElementById('socialLinks');
        if (socialLinksContainer && siteConfig.socialLinks) {
            socialLinksContainer.innerHTML = siteConfig.socialLinks
                .map(link => `
                    <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer">
                        ${link.icon}
                    </a>
                `)
                .join('');
        }
    } catch (error) {
        console.error('Error loading content:', error);
    }
});

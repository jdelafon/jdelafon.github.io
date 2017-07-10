

function generateProject(p) {

    //$("projects-content")

    var projectsWrapper = document.getElementById("projects-content");
    var project = document.createElement("div");
    projectsWrapper.appendChild(project);
    project.setAttribute("class", "project");

    // Subsections
    var linkSection = document.createElement("div");
    var roleSection = document.createElement("div");
    var sourceSection = document.createElement("div");
    var descSection = document.createElement("div");
    var stackSection = document.createElement("div");
    project.appendChild(linkSection);
    if (p.images) {
        for (var i=0; i < p.images.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("src", p.images[i].src);
            img.setAttribute("class", "illustration");
            project.appendChild(img);
        }
    }
    project.appendChild(roleSection);
    project.appendChild(sourceSection);
    project.appendChild(descSection);
    project.appendChild(stackSection);

    linkSection.setAttribute("class", "link-section subsection");
    roleSection.setAttribute("class", "role-section subsection");
    sourceSection.setAttribute("class", "source-section subsection");
    descSection.setAttribute("class", "desc-section subsection");
    stackSection.setAttribute("class", "stack-section subsection");

    // Link section
    var link = document.createElement("a");
    linkSection.appendChild(link);
    var className = "no-underline" + (p.disabled ? " disabled" : "");
    link.setAttribute("class", className);
    link.setAttribute("href", p.mainUrl || "");
    link.innerHTML = p.title +" ("+p.date+")";

    // Role section
    if (0 && p.role) {
        var roleParagraph = document.createElement("p");
        roleSection.appendChild(roleParagraph);
        roleParagraph.setAttribute("class", "role");
        roleParagraph.innerHTML = p.role;
    }

    // Source section
    if (0 && p.sourceUrl) {
        var sourceLabel = document.createElement("span");
        sourceLabel.setAttribute("class", "source-url-label, inline-label");
        sourceLabel.innerHTML = "Source: ";
        var sourceLink = document.createElement("a");
        sourceLink.setAttribute("class", "source-url no-underline");
        sourceLink.setAttribute("href", p.sourceUrl || "");
        sourceLink.innerHTML = p.sourceUrl;
        sourceSection.appendChild(sourceLabel);
        sourceSection.appendChild(sourceLink);
    }

    // Description section
    if (p.description) {

    }

    // Stack section
    if (p.stack) {
        var stackLabel = document.createElement("span");
        stackLabel.setAttribute("class", "stack-text-label inline-label");
        stackLabel.innerHTML = "Stack: ";
        var stackText = document.createElement("span");
        stackText.setAttribute("class", "stack-text");
        stackText.innerHTML = p.stack;
        stackSection.appendChild(stackLabel);
        stackSection.appendChild(stackText);
    }

}


function generateCarousel() {
    `<div class="news-image-gallery-container">
        <div class="row">
        <div class="small-12 medium-12 large-8 columns">
        <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
        <ul class="orbit-container">
        <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
    <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
    <li class="is-active orbit-slide">
        <img class="orbit-image" src="//i.imgur.com/4K3hXoZ.jpg" alt="Space">
        <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
    </li>
    <li class="orbit-slide">
        <img class="orbit-image" src="//i.imgur.com/V7zk0Y3.jpg" alt="Space">
        <figcaption class="orbit-caption">Lets Rocket!</figcaption>
    </li>
    <li class="orbit-slide">
        <img class="orbit-image" src="//i.imgur.com/vivEvd0.jpg" alt="Space">
        <figcaption class="orbit-caption">Encapsulating</figcaption>
        </li>
        <li class="orbit-slide">
        <img class="orbit-image" src="//i.imgur.com/VKdPzTp.jpg" alt="Space">
        <figcaption class="orbit-caption">Outta This World</figcaption>
    </li>
    </ul>
    <nav class="orbit-bullets">
        <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
    <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
    <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
    <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
    </nav>
    </div>
    </div>
    <div class="small-12 medium-12 large-4 columns">
        <div class="rounded-social-buttons">
        <a class="social-button facebook" href="#"></a>
        <a class="social-button twitter" href="#"></a>
        <a class="social-button linkedin" href="#"></a>
        <a class="social-button google-plus" href="#"></a>
        </div>
        <div class="clearfix"></div>
        <h4 class="news-image-gallery-title">Extraterrestrial culture: How we express ourselves through space exploration</h4>
    <p>
    This is not a new thing. Terrestrial cultures have (always) had a degree of extraterrestrial-ity in them. Cultural astronomers and archeoastronomers...
    <a href="#" class="read-more">
        Read More
    </a>
    </p>
    </div>
    </div>
    </div>
    `
}


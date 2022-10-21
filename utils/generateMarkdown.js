// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - ### [Description](#Description)
  - ### [Instructions](#Instructions)
  - ### [Updates](#Updates)
  - ### [License](#License)
  - ### [Author](#Author)
  - ### [Contributors](#Contributors)
  - ### [Future](#Future)
  - ### [SiteLink](#SiteLink)
  - ### [GithubRepo](#GithubRepo)
  ## Description
  ${data.description}
  ## Instructions
  ${data.instructions}
  ## Updates
  ${data.updates}
  ## Author
  ${data.author}
  ## Contributors
  ${data.contributors}
  ## Future
  ${data.future}
  ## Future
  ${data.SiteLink}
  ## Future
  ${data.GithubRepo}
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;

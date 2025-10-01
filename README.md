# Website-Practice

Welcome to the OSCCCT website repo!

## Dependencies

### git

- Download the latest stable version from https://git-scm.com/download
- Follow the installation instructions for your OS
- Verify installation by running the following command in your terminal

```#bash
git --version
```

- Follow these instructions to set up SSH keys for GitHub: [How to Setup up Your SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### Node.js

- Download the latest stable version from https://nodejs.org/en/
- Follow the installation instructions for your OS
- Verify installation by running the following command in your terminal

```#bash
node -v
```

## Installation

Navigate to the directory where you want to clone the repo

```#bash
git clone git@github.com:Coding-Community-of-Central-Texas/Website-Practice.git
```

Navigate to the folder where you cloned the repo
i.e.

```#bash
cd ~/Soure/Repos/Website-Practice
```

Run The following Command to Install the Required Node Packages

```#bash
npm install
```

## How to run the website

From inside of the repo, Run the following command to locally host the website

```#bash
npm run dev
```
## Add yourself to the Member Page!

1. Navigate to the [Issues tab](https://github.com/Coding-Community-of-Central-Texas/Website-Practice/issues) at the top of the page.
2. Create an issue titled "Add {your name} to the member page". Add a short description to the issue.
3. Assign yourself to the issue

<img width="582" height="136" alt="Screenshot 2025-10-01 at 10 38 09 AM" src="https://github.com/user-attachments/assets/a2c6efd5-aa4e-4ca5-b605-04734aa1d698" />

4. Create a new branch

<img width="624" height="292" alt="Screenshot 2025-10-01 at 10 39 12 AM" src="https://github.com/user-attachments/assets/f2c37760-b6eb-45c3-922b-ed93f319340e" />

5. Checkout to your branch.

>**Options:**
>
>a. Copy and paste GitHub's pop-up commands into your terminal.
>
>b. Type in your terminal `git fetch origin` and `git checkout {your-branch-name}`. Replace `{your-branch-name}` with your branch name.
>
>c. Use a GUI, like fork, to fetch (including remote branches) and click your branch in the remote branches.

6. Search the project for a "TODO" using the IDE's search function.
7. Add yourself to the member list! _Optional_: add a photo that represents you. If not, the club logo will automatically appear.
9. After you're done, run the linter using `npm prettier --write .`
10. Commit and push your changes to GitHub, then create a pull request.
### Don't forget to add the President, Vice President, and whoever else you would like as reviewers 😄

## Add an About Me

Clicking on a member on the Member Page routes to the member's About Me page automatically!
You can update your about me when you add yourself to the member page, or create a separate issue and make a new pull request!

To update your about me:
1. Go to the public/profiles/ folder.
2. Make a copy of the file called member-name.json.
3. Rename your copy to your own slug (example: amber-feeley.json).
4. Open the file and update the fields with your info:
* title (your role or specialty)
* bio (short description about you)
* skills (list your main skills)
* socials (GitHub, LinkedIn, etc.)
* (optional) projects and timeline

Save the file and that's it!
Don't forget to commit, then push your changes to GitHub!

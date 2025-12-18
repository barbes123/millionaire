# 🌍 How to Save & Publish Your Game

This guide explains how to save your code to the cloud (GitHub) so you can work on it later, and how to publish it so your family can play it online.

---

## Part 1: Saving Your Work (GitHub)

**Why?** This backs up your code. If you change computers, you can just download it again.

### 1. Create a GitHub Account
Go to [github.com](https://github.com) and sign up (it's free).

### 2. Create a New Repository
1. Log in to GitHub.
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `millionaire-family-quiz`.
4. Make it **Public** (easier to share) or **Private**.
5. Do **not** check "Add a README" or "Add .gitignore" (you already have them locally).
6. Click **Create repository**.

### 3. Upload Your Code
Open your terminal (in this project folder) and run these commands one by one:

```bash
# Initialize Git (if you haven't already)
git init

# Add all your files to the staging area
git add .

# Save (commit) your changes
git commit -m "Initial game version"

# Link your local folder to GitHub (Replace URL with YOUR repository link)
# You will see the link on the GitHub page you just created.
git remote add origin https://github.com/YOUR_USERNAME/millionaire-family-quiz.git

# Upload your code
git branch -M main
git push -u origin main
```

---

## Part 2: Making it Available Online (Deployment)

**Why?** This gives you a website link (e.g., `https://my-family-quiz.netlify.app`) that you can send to your family.

### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://www.netlify.com/) and sign up.
2. Click **Add new site** > **Import from an existing project**.
3. Select **GitHub**.
4. Authorize Netlify to see your repositories.
5. Select your `millionaire-family-quiz` repo.
6. **Build Settings** (Netlify usually detects these automatically):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **Deploy Site**.

**Result:** In about 1 minute, Netlify will give you a URL. You can share this link with anyone!

### Option B: Vercel (Also very easy)
1. Go to [vercel.com](https://vercel.com/) and sign up.
2. Click **Add New** > **Project**.
3. Import from **GitHub**.
4. Select your repository.
5. Click **Deploy**.

---

## 🔄 Updating the Game Later

If you want to add new questions or change the code later:

1. Make your changes in the code.
2. Run these commands in your terminal:
   ```bash
   git add .
   git commit -m "Added new Christmas questions"
   git push
   ```
3. If you connected Netlify or Vercel (Part 2), **it will update your website automatically**!


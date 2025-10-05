from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Check if the new text is present
    new_text = "I am a skilled software engineer ready to assist you with your coding tasks."
    assert page.locator(f"text={new_text}").is_visible()

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
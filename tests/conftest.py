import os

# app.config requires a Groq key at import time; tests never call Groq.
os.environ.setdefault("GROQ_API_KEY", "test-key")

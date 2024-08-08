"use server";

export async function handleSignup(currentState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const resp = await fetch(`${process.env.API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (!resp.ok) {
      throw new Error();
    } else {
      return {
        success: true,
        error: false,
        message: "Successfully registered"
      }
    }

  } catch (error) {
    return {
      success: false,
      error: true,
      message: "Something went wrong!"
    }
  }
}
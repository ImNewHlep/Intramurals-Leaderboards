const SESSION_KEY = "mfnhs_intramurals_auth";

export function setAuthenticatedUser(username) {
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ username, loggedInAt: Date.now() })
  );
}

export function getAuthenticatedUser() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function requireAuth() {
  const user = getAuthenticatedUser();
  if (!user) {
    window.location.replace("login.html");
    return null;
  }
  return user;
}

export function logoutUser() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.replace("login.html");
}

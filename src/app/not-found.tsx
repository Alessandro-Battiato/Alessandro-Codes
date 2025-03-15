export default function NotFound() {
    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    fontFamily:
                        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    backgroundColor: "#fff",
                    color: "#111",
                }}
            >
                <div style={{ textAlign: "center", padding: "2rem" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
                        404 - Page Not Found
                    </h1>
                    <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
                        The page you are looking for does not exist.
                    </p>
                </div>
            </body>
        </html>
    );
}

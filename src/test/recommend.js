export async function get_preference(menu) {
    const res = await fetch("http://localhost:8000/preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            menu
        })
    });

    return await res.json();
}

export async function get_weather() {
    const res = await fetch("http://localhost:8000/weather", {
        method: "GET",
    });

    return await res.json();
}
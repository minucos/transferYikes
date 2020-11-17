export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "api/users",
        data: {user},
        contentType: 'application/json'
    })
);

export const login = (user) => (
    $.ajax({
        method: "POST",
        url: "api/session",
        data: {user},
        contentType: 'application/json'
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "api/session"
    })
);
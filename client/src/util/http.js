class HTTP {
    constructor(host) {
        this.host = host;
        this.defaultHeaders = {};
    }

    request(method, url, body, headers = {}) {
        headers = {
            ...this.defaultHeaders,
            ...headers
        };

        if (headers["Content-Type"] === "application/json" && body)
            body = JSON.stringify(body);

        return fetch(`${this.host}/${url.replace(/^\//, "")}`, {
            method: method,
            headers: headers,
            body: body
        }).then(this.handleResponse);
    }

    get(url, params, headers = {}) {
        if (params) url += HTTP.parseParams(params);
        return this.request("GET", url, null, headers);
    }

    post(url, body, headers = {}) {
        return this.request("POST", url, body, {
            "Content-Type": "application/json",
            ...headers
        });
    }

    put(url, body, headers = {}) {
        return this.request("PUT", url, body, {
            "Content-Type": "application/json",
            ...headers
        });
    }

    delete(url, params, headers = {}) {
        if (params) url += HTTP.parseParams(params);
        return this.request("DELETE", url, null, {
            "Content-Type": "application/json",
            ...headers
        });
    }

    setDefaultHeader(key, value) {
        this.defaultHeaders[key] = value;
    }

    async handleResponse(res) {
        try {
            let resData = await res.json();
            if (res.status && (res.status + "").match(/^2/)) return resData;
            throw new Error(resData.error || resData);
        } catch (ex) {
            console.log(ex);
        }
    }

    static parseParams(params) {
        let paramAux = "";
        for (let param in params) paramAux += params[param];
        return paramAux;
    }
}

export const Client = new HTTP("http://localhost:3333");

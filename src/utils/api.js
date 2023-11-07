
 class Api {
    constructor({ baseUrl, headers }) {
      this._url = baseUrl;
      this._headers = headers;
    }
  
    _getResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getUserInfo() {
      return fetch(`${this._url}users/me`, {
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    getInitialCards() {
      return fetch(`${this._url}cards`, {
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    deleteCard(id) {
      return fetch(`${this._url}cards/${id}`, {
        headers: this._headers,
        method: "DELETE",
      }).then(this._getResponse);
    }
  
    createCardData(data) {
      return fetch(`${this._url}cards`, {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: data.inputNameCard,
          link: data.inputLink,
        }),
      }).then(this._getResponse);
    }
  
    changeProfile(data) {
      return fetch(`${this._url}users/me`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: data.inputName,
          about: data.inputInfo,
        }),
      }).then(this._getResponse);
    }
   
    likeCard(id) {
      return fetch(`${this._url}cards/${id}/likes`, {
        headers: this._headers,
        method: "PUT",
      }).then(this._getResponse);
    }
  
    deleteLikesCard(id) {
      return fetch(`${this._url}cards/${id}/likes`, {
        headers: this._headers,
        method: "DELETE",
      }).then(this._getResponse);
    }
  
    changeAvatar(data) {
      return fetch(`${this._url}users/me/avatar`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.inputLinkAvatar,
        }),
      }).then(this._getResponse);
    }
  }
    const apiConfig = {
      baseUrl: "https://mesto.nomoreparties.co/v1/cohort-76/",
      headers: {
        authorization: "487361ea-3659-4f38-9ffe-1c80ddb5a2d6",
        "Content-Type": "application/json",
      },
    };

    export const newApi = new Api(apiConfig);

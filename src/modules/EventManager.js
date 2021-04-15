const remoteURL = "http://localhost:8088";


export const getAllEvents = (id) => {
  if (id) {
    // return fetch(`${remoteURL}/events/?_expand=`)
    // .then(response => response.json()
  } else {
    return fetch(`${remoteURL}/events`)
    .then(response => response.json())
}}

export const getEventById = (id) => {
  return fetch(`${remoteURL}/events/${id}`)
  .then((response) => response.json());
};

export const removeEvent = (id) => {
  return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE"
  })
  .then((response) => response.json());
};

export const addEvent = (newEvent) => {
  return fetch(`${remoteURL}/events`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  })
  .then((response) => response.json());
};

export const editEvent = (editedEvent) => {
  return fetch(`${remoteURL}/events/${editedEvent.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedEvent),
  }).then((response) => response.json());
};

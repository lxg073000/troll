export const initialState = {
  user: {
    uid: "RuOAQwLrGvUaxjeANN16om7clJn1",
    email: "lxg073000@gmail.com",
    emailVerified: true,
    displayName: "Lernard Grigsby",
    isAnonymous: false,
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14GiEFHTogqvvO_fwq-fwPO0hnWq6OtK4jGM215U7sw=s96-c",
  },
  tasks: [],
  habbits: [],
  missions: [],
  challenges: [],
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

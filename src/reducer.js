export const initialState = {
  user: {
    uid: "RuOAQwLrGvUaxjeANN16om7clJn1",
    email: "lxg073000@gmail.com",
    emailVerified: true,
    displayName: "Lernard Grigsby",
    isAnonymous: false,
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14GiEFHTogqvvO_fwq-fwPO0hnWq6OtK4jGM215U7sw=s96-c",
    providerData: [
      {
        providerId: "google.com",
        uid: "108495333577300384018",
        displayName: "Lernard Grigsby",
        email: "lxg073000@gmail.com",
        phoneNumber: null,
        photoURL:
          "https://lh3.googleusercontent.com/a-/AOh14GiEFHTogqvvO_fwq-fwPO0hnWq6OtK4jGM215U7sw=s96-c",
      },
    ],
    stsTokenManager: {
      refreshToken:
        "AFxQ4_qU1mlzwX2TBkv_tqVjZD979xfeehlSsSfD94yAC1EV91bfA-C8PZfUC1v2QGw6iqvk71TUCtQoB0Hvx4H5FbmLJTM0sRVDsSKGY6h0HrDTroMb_TbgORSVRF4B2M87YVuAW3Q9KlS2fOh31q4Wab6uCKuQQzOnvd-LTQlbkoPDR5m8KF0CVaJPr5Kb-lQwFYVT1NBX_EPewW05nGMRdTcpjCmoQuX3nOxy9cZJCjBoYI1XOrPYVDpPtH3nmpb_Caj3oTMsLRjeMOl7OTlMPxamzjYTE4tgKw_o2ar9Kgs_xK0g3o1Y9tx3GSn4KTyqp7NmpZ2u7qV4vd3GAcxr9WWQygZbx09sFTt7KwahOY9-eBIsW8BJFZGysS397HCKJXhGplOSH-IVe1sBcmzYH3cqt5jf2Z-Rgj0MrDP3c0buFUwUay8",
      accessToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1NmMwNDEwZmE1MjFjMTZlNDQ2NWE4ZjVjODU5NjZhNWY1MDk5NGIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTGVybmFyZCBHcmlnc2J5IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpRUZIVG9ncXZ2T19md3EtZndQTzBobldxNk90SzRqR00yMTVVN3N3PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Ryb2xsLWZmYTA4IiwiYXVkIjoidHJvbGwtZmZhMDgiLCJhdXRoX3RpbWUiOjE2Mzk3NjE4NzgsInVzZXJfaWQiOiJSdU9BUXdMckd2VWF4amVBTk4xNm9tN2NsSm4xIiwic3ViIjoiUnVPQVF3THJHdlVheGplQU5OMTZvbTdjbEpuMSIsImlhdCI6MTYzOTc2MTg3OCwiZXhwIjoxNjM5NzY1NDc4LCJlbWFpbCI6Imx4ZzA3MzAwMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODQ5NTMzMzU3NzMwMDM4NDAxOCJdLCJlbWFpbCI6WyJseGcwNzMwMDBAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.FqMmXGrHjv7jKUiCQS-fYbx65lneYxvfo_PCHyf2uGK_38mTlsjQRowBc2B-0-T3Sb9TkrXk3yIx5Gw4QXND83MAB6Veuap3aTm5SQ4NixU5yk0nySO9m00NtFcv-wj6T_N81w0okcygHfn6JKUcghmlzKJsZetThQLOfrQdCnZxO0Lc5FUDxNSv7zRYCC-qrmlmlOGeAaunMkn6460ci4dpreGlu--SZGx--1gJBFlfz3wKvPwZ7vXl945nZvzF42MuxjVpqcOJIGKCpUCieE6h6BlT_6Muo4GEYc06UDuCXpxT13GNpAgCjChd20FDPVFJkrABn01K_AT0g52X3g",
      expirationTime: 1639765478117,
    },
    createdAt: "1639496527028",
    lastLoginAt: "1639761878087",
    apiKey: "AIzaSyA1R8ekQvW0IHRKg4oqb5G6WeUmKuMV-Kg",
    appName: "[DEFAULT]",
  },
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

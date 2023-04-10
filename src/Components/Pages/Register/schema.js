import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required("Este campo es obligatorio")
    .min(3, "al menos 2 caracteres").
    max(10, "Como maximo 10 caracteres"),
})
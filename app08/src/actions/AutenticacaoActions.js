import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from './types';

export const modificaNome = (texto) => ({
    type: MODIFICA_NOME,
    payload: texto
});

export const modificaEmail = (texto) => ({
    type: MODIFICA_EMAIL,
    payload: texto
});

export const modificaSenha = (texto) => ({
    type: MODIFICA_SENHA,
    payload: texto
});

export const cadastrarUsuario = ({ nome, email, senha }) => dispatch => {
    dispatch({ type: CADASTRO_EM_ANDAMENTO });

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(() => {
            const emailB64 = b64.encode(email);

            firebase.database().ref(`/contatos/${emailB64}`)
                .push({ nome })
                .then(() => cadastroUsuarioSucesso(dispatch));
        })
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
};

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_SUCESSO });

    Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
};

export const autenticarUsuario = ({ email, senha }) => dispatch => {
    dispatch({ type: LOGIN_EM_ANDAMENTO });

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(() => loginUsuarioSucesso(dispatch))
        .catch(erro => loginUsuarioErro(erro, dispatch));
};

const loginUsuarioSucesso = (dispatch) => {
    dispatch({ type: LOGIN_USUARIO_SUCESSO });

    Actions.principal();
};

const loginUsuarioErro = (erro, dispatch) => {
    dispatch({ type: LOGIN_USUARIO_ERRO, payload: erro.message });
};


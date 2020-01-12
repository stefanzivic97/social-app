// import { parse, serialize,  } from 'cookie';
import cookie from 'cookie';
import { type } from 'os';

export const setAccesCookie = (response: Response, request: Request, token: string) => {
    // request.headers.authorization
}

type KeyValue<K, V> = {
    key: K,
    value: V
}

export default class APIService {

    private _authToken!: string;

    constructor(_authToken: string) {
        this._authToken = _authToken;
    }

    get authToken() {
        return this._authToken;
    }

    set authToken(newAuthToken: string) {
        this._authToken = newAuthToken;
    }

    public setHeader() {
        const headers = new Headers();
    }

}
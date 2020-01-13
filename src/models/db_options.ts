import { promisify } from 'util';

export const create_model: ( model: any, input: object | {}) => any = async (model, input) => {
    const inp: any = input;
    const data_with_keys: { [key: string]: any } = {}
    
    Object.keys(inp).map((key:any) => {
        data_with_keys[key] = inp[key];
    });

    const _model = new model(data_with_keys);
    return await _model.save();
}

export const update_model: () => string | void = () => {
    return 'msg';
}

export const read_model: () => void = () => {

}

export const delete_model: () => void = () => {

}

export const find_by_id: () => void = (): void => {

}
export const create_model: ( model: any, input: object | {}) => any = async (model, input) => {
    const inp: any = input;
    const data_with_keys: { [key: string]: any } = {}
    
    Object.keys(inp).map((key: any) => {
        data_with_keys[key] = inp[key];
    });

    const _model = new model(data_with_keys);
    return await _model.save();
}

export const update_model_where: (model: any, input: object | {}, where: any) => any = async (model, input, where) => {
    const inp: any = input;
    const data_with_keys: { [key: string]: any } = {};

    Object.keys(inp).map((key: any) => {
        data_with_keys[key] = inp[key];
    })

    const _model = await model.update(data_with_keys, { where });
    return await _model;
}

export const find_one_where = async (model: any, where: {}) => {
    const w: any = where;
    const data: { [key: string]: any } = {}; 

    Object.keys(w).map((key: any) => {
        data[key] = w[key];
    });
    console.log('DATA ', data);
    const _model = await model.findOne({ where: data });
    return _model;
}   

export const read_all: (model: any) => any = async (model) => {
    // const _model = await 
}

export const delete_model: () => void = () => {

}

export const find_by_id: () => void = (): void => {

}
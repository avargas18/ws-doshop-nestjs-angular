export const objectResponse = (params): any => {
    let  dataResponse = {
        code: params[0],
        status: params[1],
        message: params[2],
        response: params[3],
        extraParameters: params[4]
    }
    return dataResponse
}

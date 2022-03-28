const API_ROOT = 'https://wty83i.deta.dev/'


enum ApiMethod {
    get = 'get',
    put = 'put'
}

type RequestParams =
    { method?: ApiMethod
    , headers?: any
    , body?: any
    , multipart?: boolean
    }

const defaultRequestParams = 
    { method: ApiMethod.get
    , headers: {}
    , multipart: false
    }

const callApi = ( endpoint: string, reqParams: RequestParams = defaultRequestParams) => {
    let params = { ...defaultRequestParams, ...reqParams }

    let headers = { 'Content-Type': 'application/json', ...params.headers }    

    return fetch(`${API_ROOT}${endpoint}`, {
        method: params.method,
        headers,
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            } else if (resp.status === 402) {
                return { message: 'Limit Exceeded'}
            } else {
                return 
            }
        })
}


/**
 * Get list of muscle groups
 * 
 * @returns json formatted list of equipment
 */
const getMuscles = () =>
    callApi('muscles', {})


/**
 * Get list of equipment
 * 
 * @returns jons formatted list of equipment
 */
const getEquipment= () =>
    callApi('equipment', {})

/**
 * Get list of exercises by muscle groups
 * 
 * @param id index of the muscle id to filter by
 * @returns json formatted list of exercises
 */
const getExerciseByMuscle = (id: Number) =>
    callApi('exercises/' + id, {})

/**
 * Get list of exercises by equipment 
 * 
 * @param id index of the equipment to filter by
 * @returns json formatted list of exercies
 */
const getExerciseByEquipment = (id: Number) =>
    callApi('equipment/' + id, {})




export {
    getMuscles,
    getExerciseByMuscle,
    getEquipment,
    getExerciseByEquipment,
    
}
export const addInformation = (image,imageName,ImageInfo) => {

    let info = {
        image,
        imageName,
        ImageInfo
    }

    return { type : "SAVE_INFO" , payload : info}

}
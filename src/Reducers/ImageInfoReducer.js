const imagesInfo = {
    column1Images : [
        {key:1,source:"https://images.unsplash.com/photo-1606787503565-7f0931f5a8cf?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:2,source:"https://images.unsplash.com/photo-1606735819077-62180cf1fc97?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:3,source:"https://images.unsplash.com/photo-1610012610554-000c6f011409?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:4,source:"https://images.unsplash.com/photo-1610012523786-166ee6045498?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:5,source:"https://images.unsplash.com/photo-1610027425104-3f2c8f7d7e4b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""}
    ],
    column2Images : [
        {key:6,source:"https://images.unsplash.com/photo-1610028317756-790a82fea7d8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:7,source:"https://images.unsplash.com/photo-1609894685093-1485c9838bde?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:8,source:"https://images.unsplash.com/photo-1606851453546-be5e6cd6935e?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:9,source:"https://images.unsplash.com/photo-1610025015335-c3346a9b9303?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:10,source:"https://images.unsplash.com/photo-1609971757431-439cf7b4141b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""}
    ],
    column3Images : [
        {key:11,source:"https://images.unsplash.com/photo-1606787733993-8e2ca2bda3ee?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:12,source:"https://images.unsplash.com/photo-1610000383398-a6348320da99?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:13,source:"https://images.unsplash.com/photo-1609925975778-aad961cd9d76?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:14,source:"https://images.unsplash.com/photo-1593042522109-25c9aced4128?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""},
        {key:15,source:"https://images.unsplash.com/photo-1609975797280-10fa9bd20e16?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"",info:""}
    ]
}

const imageInfoReducer = (state = imagesInfo, action) => {

    switch(action.type) {
        
        case "SAVE_INFO" : 
            action.payload.image.name = action.payload.imageName;
            action.payload.image.info = action.payload.ImageInfo;
            return state;
            
        default : 
            return state
    }
}

export default imageInfoReducer;
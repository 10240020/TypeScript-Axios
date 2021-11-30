// 图片上传
data = {
    upload:[],
    choise:[]
}

uploadImage = function(){
    var tant = this;
    const {choise} = this.data;
    wx.chooseImage({
        count: 5 - choise.length,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        async success(Response){
            const newImage = Response.tempFilePaths;
            const imatgeInfo = Response.tempFiles;
            // 是否符合要求
            for(let i = 0; i < imatgeInfo.length; i++){
                if(imatgeInfo[size].size / 1024 / 1024 >= 10){
                    wx.showModal({
                        title: '提示',
                        content:'图片超过10M',
                        showCancel: false,
                        confirmText: '确定'
                    });
                    return false;
                }
                // 格式
                const iamgeSplit = imatgeInfo[i].path.split('.');
                const imageLength = iamgeSplit.length;
                if(['jpg','png','jpeg'].includes(iamgeSplit[imageLength - 1])){

                }else{
                    utils.showModalInfo({
                        content: '请选择正确格式图片上传'
                    })
                    return
                }
            }
            // ------------------------------
            newImage.forEach(Element =>{
                choise.push(element)
            })
            // 限制上传数量
            if(choise.length > 9){
                wx.showModal({
                    title:'提示',
                    content:'已上传至最大数量',
                    showCancel: false,
                    confirmText: '确定'
                })
            }
            // ------------------------------------
            if(choise.length > 0){
                if(choise.length > 9){
                    tant.setData({
                        hidden: true
                    })
                }else{
                    tant.setData({
                        hidden: false
                    })
                }

                // 浏览图
                tant.setData({
                    choise
                })
                
                // ---------
                // 请求
                const requestImage = []
                newImage.forEach(element=>{
                    wx.uploadFile({
                        url:'',
                        filePath: element,
                        header:{
                            'content-type': 'multipart/form-data'
                        },
                        name:'file',
                        // FormData:{
                        //     'isup':2
                        // }
                        success: function(){
                            const data = JSON.parse(data)   
                            // 
                            const upload = tant.data.upload
                            upload.push({
                                image:data,
                                isShow: false,
                                requestMsg,
                            })
                            tant.setData({
                                upload
                            })
                        },
                        fail: function(){
                            wx.showToast({
                                title:'网络出错',
                                icon:'none',
                                duration: 1000
                            })
                        }
                    })
                })
            }
        }
    })
}

// 浏览图片
function priviewImage(e){
    const contentImage = e.currentTarget.dataset.image;
    wx.previewImage({
        current:contentImage,
        urls:[contentImage],
    })
}

// 删除图片
function deleteImage(e){
    const index = e.currentTarget.dataset.index;
    const {upload,choise} = this.data;
    upload.splice(index,1);
    choise.splice(index,1)
    this.setData({
        upload,
        choise,
        hidden: choise.length === 9
    })
}
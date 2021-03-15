function installWidgetPreviewMultiple(widget, list) {
    widget.onChange(function(fileGroup) {
        list.empty()
        if (fileGroup) {
            $.when.apply(null, fileGroup.files()).done(function() {
                $.each(arguments, function(i, fileInfo) {
                    var src = fileInfo.cdnUrl + '-/scale_crop/160x160/center/'

                    list.append($('<div/>', {class: '_item'}).append([$('<img/>', {src: src}), fileInfo.name]))
                })
            })
        }
    })
}

$(function() {
    $('.image-preview-multiple').each(function() {
        installWidgetPreviewMultiple(uploadcare.MultipleWidget($(this).children('input')), $(this).children('._list'));
    })
})
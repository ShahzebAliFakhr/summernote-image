$(document).ready(function() {
    
    var IMAGE_PATH = window.location.href;

    $('.summernote').summernote({
        placeholder: 'Write anything..',
        height: 400,
        toolbar: [
                    ['style'],
                    ['fontsize', ['fontsize']], ['fontname', ['fontname']],  ['style', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                    ['para', ['ul', 'ol', 'paragraph']],  ['height', ['height']],  ['color', ['color']],['float', ['floatLeft', 'floatRight', 'floatNone']],['remove', ['removeMedia']],['table', ['table']],['insert', ['link', 'unlink', 'picture', 'video', 'hr']], ['view', ['fullscreen', 'codeview']] ],
        callbacks : {
            onImageUpload: function(image) {
                uploadImage(image[0]);
            }
        }
    });

    function uploadImage(image) {
        var data = new FormData();
        data.append("image",image);
        $.ajax ({
            data: data,
            type: "POST",
            url: "uploads.php",
            cache: false,
            contentType: false,
            processData: false,
            success: function(url) {
                var image = IMAGE_PATH + url;
                $('.summernote').summernote('insertImage', image);
            },
            error: function(data) {
                console.log(data);
            }
        });
    }

});
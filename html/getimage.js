        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
        window.URL = window.URL || window.webkitURL;

        var video = document.getElementById('video_cam');
        navigator.getUserMedia({
                video: true,
                audio: false
            },
            function (stream) { // for success case
                console.log(stream);
                video.src = window.URL.createObjectURL(stream);
            },
            function (err) { // for error case
                console.log(err);
            }
        );

        var captchaCnt = 0;

        function captcha() {

            console.log("start");

            var video = document.querySelector('#video_cam');
            var drow = document.querySelector('#canvas_draw');
            var frames = document.querySelector('#frames');

            video.width = drow.width = video.offsetWidth;
            video.height = drow.height = video.offsetHeight;
            var ctx_draw = drow.getContext('2d');

            // import the image from the video
            ctx_draw.drawImage(video, 0, 0, video.width, video.height);

            // export the image from the canvas
            var div = document.createElement("div");
            div.id = "cap"+captchaCnt;
            div.style.display = "none";
            var img = new Image();
            img.src = drow.toDataURL('image/png');
            //img.width = 140;
            div.appendChild(img);
            frames.appendChild(div);

            change(++captchaCnt);

            console.log("end");
        }



        function change(ptn) {
            var filename = "";
            switch (ptn) {
            case 0:
                filename = "face.png";
                break;
            case 1:
                filename = "faceR.png";
                break;
            case 2:
                filename = "faceL.png";
                break;
            }
            var guide = document.querySelector('#imageGuide');
            console.log(guide);
            guide.style.backgroundImage = "url(./images/"+filename+")";
        }


         //            $('#video_cam').jrumble({
         //                x: 2,
         //                y: 2,
         //                rotation: 1
         //            });
         //            $('#video_cam').trigger('startRumble');

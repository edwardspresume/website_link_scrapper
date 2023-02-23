<div class='loading'>Loading</div>

<style>
    .loading {
        width: 150px;
        height: 150px;
        line-height: 150px;
        margin: 50px auto;
        position: relative;
        box-sizing: border-box;
        text-align: center;
        z-index: 0;
        text-transform: uppercase;
    }

    .loading:before,
    .loading:after {
        opacity: 0;
        box-sizing: border-box;
        content: '\0020';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        border: 5px solid #fff;
        box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
    }

    .loading:after {
        z-index: 1;
        animation: loader 2s infinite 1s;
    }

    .loading:before {
        z-index: 2;
        animation: loader 2s infinite;
    }

    @keyframes loader {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
</style>

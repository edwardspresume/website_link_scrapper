<div
    class="absolute top-0 left-0 grid w-full h-full p-4 bg-black bg-opacity-60 place-items-center z-10"
>
    <span role="status" class="loading relative">Loading...</span>
</div>

<style>
    .loading {
        z-index: 0;
        width: 180px;
        height: 180px;
        line-height: 180px;
        text-align: center;
        text-transform: uppercase;
    }

    .loading:before,
    .loading:after {
        opacity: 0;
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

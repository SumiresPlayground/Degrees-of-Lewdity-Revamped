/*
Example usage of image patterns:

T.modeloptions.worn_upper_colour = "custom"
T.modeloptions.filters.worn_upper_custom = {
	blend: { pattern: "wolfharmony" },
	blendMode: "hard-light"
}
*/

registerImagePattern("wolfharmony", "img/ui/wolfharmony.png");

/*
Example usage:

T.modeloptions.worn_upper_colour = "custom"
T.modeloptions.filters.worn_upper_custom = {
	blend: {
		pattern: { type: "checkerboard", colors: ["white", "black" ] }
	},
	blendMode: "hard-light"
}
 */
registerGeneratedPattern("checkerboard", function (spec) {
	const canvas = Renderer.createCanvas(8, 8, spec.colors[0]);
	canvas.fillStyle = spec.colors[1];
	canvas.fillRect(4, 0, 4, 4);
	canvas.fillRect(0, 4, 4, 4);
	return canvas.canvas; // return HTMLCanvasElement of CanvasRenderingContext2D
});

let hairSplitMaskImg = null;
(function () {
    const img = new Image();
    img.onload = function () { hairSplitMaskImg = img; };
    img.src = "img/hair/masks/split.png";
})();


registerGeneratedPattern("hairsplit", function (spec) {
    const size = 256;
    const base = Renderer.createCanvas(size, size, spec.colors[0]);


    if (hairSplitMaskImg) {
        const masked = document.createElement("canvas");
        masked.width = size;
        masked.height = size;
        const mctx = masked.getContext("2d");
        mctx.fillStyle = spec.colors[1];
        mctx.fillRect(0, 0, size, size);
        mctx.globalCompositeOperation = "destination-in";
        mctx.drawImage(hairSplitMaskImg, 0, 0, size, size);


        base.drawImage(masked, 0, 0);
    }


    return base.canvas;
});


let hairFrameMaskImg = null;
(function () {
    const img = new Image();
    img.onload = function () { hairFrameMaskImg = img; };
    img.src = "img/hair/masks/face-frame.png";
})();


registerGeneratedPattern("hairframe", function (spec) {
    const size = 256;
    const base = Renderer.createCanvas(size, size, spec.colors[0]);


    if (hairFrameMaskImg) {
        const masked = document.createElement("canvas");
        masked.width = size;
        masked.height = size;
        const mctx = masked.getContext("2d");
        mctx.fillStyle = spec.colors[1];
        mctx.fillRect(0, 0, size, size);
        mctx.globalCompositeOperation = "destination-in";
        mctx.drawImage(hairFrameMaskImg, 0, 0, size, size);


        base.drawImage(masked, 0, 0);
    }


    return base.canvas;
});

let hairLombreMaskImg = null;
(function () {
    const img = new Image();
    img.onload = function () { hairLombreMaskImg = img; };
    img.src = "img/hair/masks/low-ombre.png";
})();


registerGeneratedPattern("low-ombre", function (spec) {
    const size = 256;
    const base = Renderer.createCanvas(size, size, spec.colors[0]);


    if (hairLombreMaskImg) {
        const masked = document.createElement("canvas");
        masked.width = size;
        masked.height = size;
        const mctx = masked.getContext("2d");
        mctx.fillStyle = spec.colors[1];
        mctx.fillRect(0, 0, size, size);
        mctx.globalCompositeOperation = "destination-in";
        mctx.drawImage(hairLombreMaskImg, 0, 0, size, size);


        base.drawImage(masked, 0, 0);
    }


    return base.canvas;
});

let hairHombreMaskImg = null;
(function () {
    const img = new Image();
    img.onload = function () { hairHombreMaskImg = img; };
    img.src = "img/hair/masks/high-ombre.png";
})();


registerGeneratedPattern("high-ombre", function (spec) {
    const size = 256;
    const base = Renderer.createCanvas(size, size, spec.colors[0]);


    if (hairHombreMaskImg) {
        const masked = document.createElement("canvas");
        masked.width = size;
        masked.height = size;
        const mctx = masked.getContext("2d");
        mctx.fillStyle = spec.colors[1];
        mctx.fillRect(0, 0, size, size);
        mctx.globalCompositeOperation = "destination-in";
        mctx.drawImage(hairHombreMaskImg, 0, 0, size, size);


        base.drawImage(masked, 0, 0);
    }


    return base.canvas;
});
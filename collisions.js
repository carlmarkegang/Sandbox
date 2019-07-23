// Repetative functions that controls what 
// different block types do when colliding with each other or player

function collideBlock(rect) {
    rect.hittingGround = 0
    for (i = 0; i < blocks.length; i++) {
        var cx = blocks[i].x + blocks[i].width * 0.5;
        var cy = blocks[i].y + blocks[i].height * 0.5;
        var rectCx = rect.x + rect.width * 0.5;
        var rectCy = rect.y + rect.height * 0.5;

        var dx = rectCx - cx;// x difference between centers
        var dy = rectCy - cy;// y difference between centers
        var aw = (rect.width + blocks[i].width) * 0.5;// average width
        var ah = (rect.height + blocks[i].height) * 0.5;// average height


        if (Math.abs(dx) > aw || Math.abs(dy) > ah) {
            continue
        }

        if (Math.abs(dx / blocks[i].width) > Math.abs(dy / blocks[i].height)) {

            if (dx < 0) {
                rect.x = blocks[i].x - rect.width;// left
                continue
            }
            else {
                rect.x = blocks[i].x + blocks[i].width; // right
                continue
            }

        } else {

            if (dy < 0) {
                rect.y = blocks[i].y - rect.height; // top
                if (rect.velY > 0) {
                    rect.velY = 0;
                }
                rect.hittingGround = 1;
                continue
            }
            else {
                rect.y = blocks[i].y + blocks[i].height; // bottom
                if (rect.velY < -0.5) {
                    rect.velY = -0.5;
                }
                continue
            }

        }
    }
}

function collideBlockBouncePlayer(rect) {
    for (i = 0; i < bounceBlocks.length; i++) {
        var cx = bounceBlocks[i].x + bounceBlocks[i].width * 0.5;
        var cy = bounceBlocks[i].y + bounceBlocks[i].height * 0.5;
        var rectCx = rect.x + rect.width * 0.5;
        var rectCy = rect.y + rect.height * 0.5;

        var dx = rectCx - cx;// x difference between centers
        var dy = rectCy - cy;// y difference between centers
        var aw = (rect.width + bounceBlocks[i].width) * 0.5;// average width
        var ah = (rect.height + bounceBlocks[i].height) * 0.5;// average height


        if (Math.abs(dx) > aw || Math.abs(dy) > ah) {
            continue
        }

        if (Math.abs(dx / bounceBlocks[i].width) > Math.abs(dy / bounceBlocks[i].height)) {

            if (dx < 0) {
                rect.x = bounceBlocks[i].x - rect.width;// left
                continue
            }
            else {
                rect.x = bounceBlocks[i].x + bounceBlocks[i].width; // right
                continue
            }

        } else {

            if (dy < 0) {
                rect.y = bounceBlocks[i].y - rect.height; // top
                if (rect.velY > 0) {
                    rect.velY = 0;
                }
                rect.hittingGround = 1;
                continue
            }
            else {
                rect.y = bounceBlocks[i].y + bounceBlocks[i].height; // bottom
                if (rect.velY < -0.5) {
                    rect.velY = -0.5;
                }
                continue
            }

        }
    }
}

function collideTriggerBlockPlayer(rect) {
    
    for (i = 0; i < triggerBlocks.length; i++) {
        var cx = triggerBlocks[i].x + triggerBlocks[i].width * 0.5;
        var cy = triggerBlocks[i].y + triggerBlocks[i].height * 0.5;
        var rectCx = rect.x + rect.width * 0.5;
        var rectCy = rect.y + rect.height * 0.5;

        var dx = rectCx - cx;// x difference between centers
        var dy = rectCy - cy;// y difference between centers
        var aw = (rect.width + triggerBlocks[i].width) * 0.5;// average width
        var ah = (rect.height + triggerBlocks[i].height) * 0.5;// average height


        if (Math.abs(dx) > aw || Math.abs(dy) > ah) {
            continue
        }
        debugger;
        if (Math.abs(dx / triggerBlocks[i].width) > Math.abs(dy / triggerBlocks[i].height)) {

            if (dx < 0) {
                rect.x = triggerBlocks[i].x - rect.width;// left
                goToLevel(triggerBlocks[i].option)
                continue
            }
            else {
                rect.x = triggerBlocks[i].x + triggerBlocks[i].width; // right
                goToLevel(triggerBlocks[i].option)
                continue
            }

        } else {

            if (dy < 0) {
                rect.y = triggerBlocks[i].y - rect.height; // top
                goToLevel(triggerBlocks[i].option)
                continue
            }
            else {
                rect.y = triggerBlocks[i].y + triggerBlocks[i].height; // bottom
                goToLevel(triggerBlocks[i].option)
                continue
            }

        }
    }
}

function collideBlockBounce(rect) {
    rect.hittingGround = 0
    for (i = 0; i < blocks.length; i++) {
        var cx = blocks[i].x + blocks[i].width * 0.5;
        var cy = blocks[i].y + blocks[i].height * 0.5;
        var rectCx = rect.x + rect.width * 0.5;
        var rectCy = rect.y + rect.height * 0.5;

        var dx = rectCx - cx;// x difference between centers
        var dy = rectCy - cy;// y difference between centers
        var aw = (rect.width + blocks[i].width) * 0.5;// average width
        var ah = (rect.height + blocks[i].height) * 0.5;// average height


        if (Math.abs(dx) > aw || Math.abs(dy) > ah) {
            continue
        }

        if (Math.abs(dx / blocks[i].width) > Math.abs(dy / blocks[i].height)) {

            if (dx < 0) {
                rect.x = blocks[i].x - rect.width;// left
                rect.directionX = 0;
                continue
            }
            else {
                rect.x = blocks[i].x + blocks[i].width; // right
                rect.directionX = 1;
                continue
            }

        } else {

            if (dy < 0) {
                rect.y = blocks[i].y - rect.height; // top
                if (rect.velY > 0) {
                    rect.velY = 0;
                }
                rect.directionY = 0;
                continue
            }
            else {
                rect.y = blocks[i].y + blocks[i].height; // bottom
                if (rect.velY < -0.5) {
                    rect.velY = -0.5;
                }
                rect.directionY = 1;
                continue
            }

        }
    }
}
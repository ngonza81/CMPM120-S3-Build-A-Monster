class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        this.keyS = null;
        this.keyF = null;
        this.keyA = null;
        this.keyD = null;

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftArmX = this.bodyX - 110;
        this.leftArmY = this.bodyY + 50;

        this.rightArmX = this.bodyX + 110;
        this.rightArmY = this.bodyY + 50;

        this.leftLegX = this.bodyX - 40;
        this.leftLegY = this.bodyY + 140;

        this.rightLegX = this.bodyX + 40;
        this.rightLegY = this.bodyY + 140;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 30;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 30;

        this.lefthornX = this.bodyX - 40;
        this.lefthornY = this.bodyY - 85;

        this.righthornX = this.bodyX + 40;
        this.righthornY = this.bodyY - 85;
        

        
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm.flipX = true; 
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenC.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenA.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_blue.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthD.png");
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.leftHorn = this.add.sprite(this.lefthornX, this.lefthornY, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.righthornX, this.righthornY, "monsterParts", "detail_green_horn_small.png");

        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;

        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            my.sprite.mouth.visible = false;
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }

        if (Phaser.Input.Keyboard.JustUp(this.keyS)) {
            my.sprite.mouth.visible = true;
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = false;
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            my.sprite.mouth.visible = false;
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }

        if (Phaser.Input.Keyboard.JustUp(this.keyF)) {
            my.sprite.mouth.visible = true;
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = false;
        }

        
        if (this.keyA.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 10;
            }
        }

        if (this.keyD.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 10;
            }
        }
       
    }

}
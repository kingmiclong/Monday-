class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('mountain', './assets/mountain.png');
        this.load.audio('sfx_choose', './assets/choose.wav');
        this.load.audio('sfx_boom', './assets/boom.wav');
        this.load.audio('sfx_fireballs', './assets/fireballs.wav');
        this.load.audio('bg', './assets/relief.wav');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Lato',
            fontSize: '75px',
            backgroundColor: '#00F4FC',
            color: '#0045FC',
            align: 'right',
            padding: {
                top: 0.1,
                bottom: 0.1,
            },
            fixedWidth: 0
        }

        let buttonConfig = {
          fontFamily: 'Lato',
          fontSize: '50px',
          backgroundColor: '#00F4FC',
          color: '#0045FC',
          align: 'right',
          padding: {
              top: 0.1,
              bottom: 0.1,
          },
          fixedWidth: 0
      }
        
        this.mountain = this.add.tileSprite(0, 0, 640, 480, 'mountain').setOrigin(0, 0);
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding*10, 'Fire and Dragon', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        menuConfig.backgroundColor = '#00F4FC';
        menuConfig.color = '#0045FC';
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding*3, 'Use ←→ arrows to move and F to fire', menuConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // play music
        var music = this.sound.add('bg');
        music.setLoop(true);
        music.play();

        buttonConfig.backgroundColor = '#40718B';
        var textE = this.add.text(game.config.width-530,350, 'Easy', buttonConfig);
        textE.setInteractive({ useHandCursor: true });
        textE.on('pointerdown', () => this.clickButtonE());


        buttonConfig.backgroundColor = '#40718B';
        var textH = this.add.text(game.config.width-230,350, 'Hard', buttonConfig);
        textH.setInteractive({ useHandCursor: true });
        textH.on('pointerdown', () => this.clickButtonH());

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    // buttons
    clickButtonE() {
      game.settings = {
        spaceshipSpeed: 3,
        dinoSpeed: 5,
        gameTimer: 60000    
      }
      this.sound.play('sfx_choose');
      this.scene.start("playScene");  
    }

    clickButtonH() {
      game.settings = {
        spaceshipSpeed: 4,
        dinoSpeed: 7,
        gameTimer: 45000    
      }
      this.sound.play('sfx_choose');
      this.scene.start("playScene");  
    }
}
<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241112085303 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE chorus (id INT AUTO_INCREMENT NOT NULL, number INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `key` (id INT AUTO_INCREMENT NOT NULL, key_chord VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE morceaux (id INT AUTO_INCREMENT NOT NULL, volume_id INT DEFAULT NULL, style_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, INDEX IDX_823125C38FD80EEA (volume_id), INDEX IDX_823125C3BACD6074 (style_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE style (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tempo (id INT AUTO_INCREMENT NOT NULL, speed INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE track (id INT AUTO_INCREMENT NOT NULL, number INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE volume (id INT AUTO_INCREMENT NOT NULL, number INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C38FD80EEA FOREIGN KEY (volume_id) REFERENCES volume (id)');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C3BACD6074 FOREIGN KEY (style_id) REFERENCES style (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C38FD80EEA');
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C3BACD6074');
        $this->addSql('DROP TABLE chorus');
        $this->addSql('DROP TABLE `key`');
        $this->addSql('DROP TABLE morceaux');
        $this->addSql('DROP TABLE style');
        $this->addSql('DROP TABLE tempo');
        $this->addSql('DROP TABLE track');
        $this->addSql('DROP TABLE volume');
    }
}

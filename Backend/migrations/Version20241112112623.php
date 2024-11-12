<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241112112623 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux ADD disc_id INT DEFAULT NULL, CHANGE key_chord_id key_chord_id INT NOT NULL');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C3C38F37CA FOREIGN KEY (disc_id) REFERENCES disc (id)');
        $this->addSql('CREATE INDEX IDX_823125C3C38F37CA ON morceaux (disc_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C3C38F37CA');
        $this->addSql('DROP TABLE disc');
        $this->addSql('DROP INDEX IDX_823125C3C38F37CA ON morceaux');
        $this->addSql('ALTER TABLE morceaux DROP disc_id, CHANGE key_chord_id key_chord_id INT DEFAULT NULL');
    }
}

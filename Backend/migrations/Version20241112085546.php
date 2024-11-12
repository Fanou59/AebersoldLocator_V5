<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241112085546 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux ADD key_chord_id INT NOT NULL, ADD tempo_id INT DEFAULT NULL, ADD track_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C315E8C36A FOREIGN KEY (key_chord_id) REFERENCES `key` (id)');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C3234B247D FOREIGN KEY (tempo_id) REFERENCES tempo (id)');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C35ED23C43 FOREIGN KEY (track_id) REFERENCES track (id)');
        $this->addSql('CREATE INDEX IDX_823125C315E8C36A ON morceaux (key_chord_id)');
        $this->addSql('CREATE INDEX IDX_823125C3234B247D ON morceaux (tempo_id)');
        $this->addSql('CREATE INDEX IDX_823125C35ED23C43 ON morceaux (track_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C315E8C36A');
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C3234B247D');
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C35ED23C43');
        $this->addSql('DROP INDEX IDX_823125C315E8C36A ON morceaux');
        $this->addSql('DROP INDEX IDX_823125C3234B247D ON morceaux');
        $this->addSql('DROP INDEX IDX_823125C35ED23C43 ON morceaux');
        $this->addSql('ALTER TABLE morceaux DROP key_chord_id, DROP tempo_id, DROP track_id');
    }
}

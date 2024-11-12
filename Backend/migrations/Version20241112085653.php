<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241112085653 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux ADD chorus_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE morceaux ADD CONSTRAINT FK_823125C36A45FEE8 FOREIGN KEY (chorus_id) REFERENCES chorus (id)');
        $this->addSql('CREATE INDEX IDX_823125C36A45FEE8 ON morceaux (chorus_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE morceaux DROP FOREIGN KEY FK_823125C36A45FEE8');
        $this->addSql('DROP INDEX IDX_823125C36A45FEE8 ON morceaux');
        $this->addSql('ALTER TABLE morceaux DROP chorus_id');
    }
}
